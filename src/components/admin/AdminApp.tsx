"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { defaultSiteCopy, type CopyFeature, type SiteCopy } from "@/content/site-copy";
import { typography } from "@/lib/type";

type Status = { tone: "ok" | "error"; message: string } | null;

export function AdminApp() {
  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then((data: { authenticated?: boolean }) => {
        setAuthenticated(Boolean(data.authenticated));
        setReady(true);
      })
      .catch(() => setReady(true));
  }, []);

  if (!ready) {
    return <p className="text-muted">Loading…</p>;
  }

  if (!authenticated) {
    return <LoginForm onSuccess={() => setAuthenticated(true)} />;
  }

  return <AdminEditor onLogout={() => setAuthenticated(false)} />;
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        setStatus({ tone: "error", message: "Invalid username or password." });
        return;
      }
      onSuccess();
    } catch {
      setStatus({ tone: "error", message: "Could not sign in." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} className="mx-auto w-full max-w-md rounded-[var(--radius)] border border-line bg-panel p-6 sm:p-8">
      <p className="eyebrow">Hidden admin</p>
      <h1 className={`mt-3 ${typography.h1}`}>Sign in</h1>
      <p className={`${typography.small} mt-3 text-muted`}>
        Edit site copy, heading color, and info. This page is not linked anywhere on the public site.
      </p>
      <label className="mt-8 block">
        <span className="eyebrow mb-2 block">Username</span>
        <input
          autoComplete="username"
          className="admin-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </label>
      <label className="mt-5 block">
        <span className="eyebrow mb-2 block">Password</span>
        <input
          type="password"
          autoComplete="current-password"
          className="admin-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      {status ? (
        <p className={`mt-4 text-sm ${status.tone === "error" ? "text-magenta" : "text-lime"}`}>
          {status.message}
        </p>
      ) : null}
      <div className="mt-8">
        <Button type="submit">{pending ? "Signing in…" : "Enter"}</Button>
      </div>
    </form>
  );
}

function AdminEditor({ onLogout }: { onLogout: () => void }) {
  const { setCopy } = useSiteCopy();
  const [draft, setDraft] = useState<SiteCopy>(defaultSiteCopy);
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetch("/api/content")
      .then((response) => response.json())
      .then((data: SiteCopy) => setDraft(data))
      .catch(() => {});
  }, []);

  async function save() {
    setPending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      if (!response.ok) {
        setStatus({ tone: "error", message: "Save failed. Sign in again if the session expired." });
        return;
      }
      const next = (await response.json()) as SiteCopy;
      setDraft(next);
      setCopy(next);
      setStatus({ tone: "ok", message: "Saved. Public pages will pick this up on refresh." });
    } catch {
      setStatus({ tone: "error", message: "Save failed." });
    } finally {
      setPending(false);
    }
  }

  async function reset() {
    if (!confirm("Reset all copy to the original defaults?")) return;
    setPending(true);
    try {
      const response = await fetch("/api/content", { method: "DELETE" });
      if (!response.ok) {
        setStatus({ tone: "error", message: "Reset failed." });
        return;
      }
      const next = (await response.json()) as SiteCopy;
      setDraft(next);
      setCopy(next);
      setStatus({ tone: "ok", message: "Reset to defaults." });
    } finally {
      setPending(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    onLogout();
  }

  return (
    <div className="pb-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Noetic Realms</p>
          <h1 className={`mt-3 ${typography.h1}`}>Site admin</h1>
          <p className={`${typography.small} mt-3 max-w-2xl text-muted`}>
            Change verbiage, heading colors, and studio info. This URL is hidden from nav, footer, and search.
          </p>
        </div>
        <Button variant="secondary" onClick={logout}>
          Sign out
        </Button>
      </div>

      <Section title="Colors">
        <div className="grid gap-5 sm:grid-cols-2">
          <ColorField
            label="Wordmark / logo color"
            value={draft.headingColor}
            onChange={(headingColor) => setDraft({ ...draft, headingColor })}
          />
          <ColorField
            label="Heading text color"
            value={draft.titleColor}
            onChange={(titleColor) => setDraft({ ...draft, titleColor })}
          />
        </div>
      </Section>

      <Section title="Navigation">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Duel Me Bro tab" value={draft.nav.duelMeBro} onChange={(duelMeBro) => setDraft({ ...draft, nav: { ...draft.nav, duelMeBro } })} />
          <TextField label="About tab" value={draft.nav.about} onChange={(about) => setDraft({ ...draft, nav: { ...draft.nav, about } })} />
          <TextField label="Contact tab" value={draft.nav.contact} onChange={(contact) => setDraft({ ...draft, nav: { ...draft.nav, contact } })} />
          <TextField label="Privacy tab" value={draft.nav.privacy} onChange={(privacy) => setDraft({ ...draft, nav: { ...draft.nav, privacy } })} />
        </div>
      </Section>

      <Section title="Duel Me Bro page">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Title" value={draft.game.title} onChange={(title) => setDraft({ ...draft, game: { ...draft.game, title } })} />
          <TextField label="Status label" value={draft.game.statusLabel} onChange={(statusLabel) => setDraft({ ...draft, game: { ...draft.game, statusLabel } })} />
          <TextField label="Wordmark line 1" value={draft.game.wordmarkLine1} onChange={(wordmarkLine1) => setDraft({ ...draft, game: { ...draft.game, wordmarkLine1 } })} />
          <TextField label="Wordmark line 2" value={draft.game.wordmarkLine2} onChange={(wordmarkLine2) => setDraft({ ...draft, game: { ...draft.game, wordmarkLine2 } })} />
          <TextField label="VR mark" value={draft.game.vrMark} onChange={(vrMark) => setDraft({ ...draft, game: { ...draft.game, vrMark } })} />
          <TextField label="Platforms" value={draft.game.platforms} onChange={(platforms) => setDraft({ ...draft, game: { ...draft.game, platforms } })} />
          <TextField label="Store genres" value={draft.game.genres} onChange={(genres) => setDraft({ ...draft, game: { ...draft.game, genres } })} />
        </div>
        <TextField label="Tagline" value={draft.game.tagline} onChange={(tagline) => setDraft({ ...draft, game: { ...draft.game, tagline } })} />
        <TextArea label="Summary" value={draft.game.summary} onChange={(summary) => setDraft({ ...draft, game: { ...draft.game, summary } })} />
        <TextField label="Pitch eyebrow" value={draft.game.pitchEyebrow} onChange={(pitchEyebrow) => setDraft({ ...draft, game: { ...draft.game, pitchEyebrow } })} />
        {draft.game.description.map((paragraph, index) => (
          <TextArea
            key={`desc-${index}`}
            label={`Description paragraph ${index + 1}`}
            value={paragraph}
            onChange={(value) =>
              setDraft({
                ...draft,
                game: {
                  ...draft.game,
                  description: draft.game.description.map((item, itemIndex) =>
                    itemIndex === index ? value : item,
                  ),
                },
              })
            }
          />
        ))}
        <FeatureList
          label="Features"
          items={draft.game.features}
          onChange={(features) => setDraft({ ...draft, game: { ...draft.game, features } })}
        />
        <div className="grid gap-5 sm:grid-cols-3">
          <TextField label="Modes eyebrow" value={draft.game.modesEyebrow} onChange={(modesEyebrow) => setDraft({ ...draft, game: { ...draft.game, modesEyebrow } })} />
          <TextField label="Modes title" value={draft.game.modesTitle} onChange={(modesTitle) => setDraft({ ...draft, game: { ...draft.game, modesTitle } })} />
          <TextField label="Modes highlight" value={draft.game.modesHighlight} onChange={(modesHighlight) => setDraft({ ...draft, game: { ...draft.game, modesHighlight } })} />
        </div>
        <FeatureList
          label="Modes"
          items={draft.game.modes}
          onChange={(modes) => setDraft({ ...draft, game: { ...draft.game, modes } })}
        />
      </Section>

      <Section title="Studio info">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Studio name" value={draft.studio.name} onChange={(name) => setDraft({ ...draft, studio: { ...draft.studio, name } })} />
          <TextField label="Tagline" value={draft.studio.tagline} onChange={(tagline) => setDraft({ ...draft, studio: { ...draft.studio, tagline } })} />
          <TextField label="Platforms line" value={draft.studio.platformsLine} onChange={(platformsLine) => setDraft({ ...draft, studio: { ...draft.studio, platformsLine } })} />
          <TextField label="Email" value={draft.studio.email} onChange={(email) => setDraft({ ...draft, studio: { ...draft.studio, email } })} />
          <TextField label="Meta Store URL" value={draft.studio.wishlistUrl} onChange={(wishlistUrl) => setDraft({ ...draft, studio: { ...draft.studio, wishlistUrl } })} />
          <TextField label="Wishlist button" value={draft.studio.wishlistLabel} onChange={(wishlistLabel) => setDraft({ ...draft, studio: { ...draft.studio, wishlistLabel } })} />
          <TextField label="Discord URL" value={draft.studio.discordUrl} onChange={(discordUrl) => setDraft({ ...draft, studio: { ...draft.studio, discordUrl } })} />
          <TextField label="Discord button" value={draft.studio.discordLabel} onChange={(discordLabel) => setDraft({ ...draft, studio: { ...draft.studio, discordLabel } })} />
          <TextField label="YouTube URL" value={draft.studio.youtubeUrl} onChange={(youtubeUrl) => setDraft({ ...draft, studio: { ...draft.studio, youtubeUrl } })} />
          <TextField label="Instagram URL" value={draft.studio.instagramUrl} onChange={(instagramUrl) => setDraft({ ...draft, studio: { ...draft.studio, instagramUrl } })} />
          <TextField label="TikTok URL" value={draft.studio.tiktokUrl} onChange={(tiktokUrl) => setDraft({ ...draft, studio: { ...draft.studio, tiktokUrl } })} />
          <TextField label="Footer line" value={draft.studio.footerLine} onChange={(footerLine) => setDraft({ ...draft, studio: { ...draft.studio, footerLine } })} />
        </div>
        <TextArea label="Studio description" value={draft.studio.description} onChange={(description) => setDraft({ ...draft, studio: { ...draft.studio, description } })} />
        <TextArea label="Studio about" value={draft.studio.about} onChange={(about) => setDraft({ ...draft, studio: { ...draft.studio, about } })} />
      </Section>

      <Section title="About page">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField label="Eyebrow" value={draft.about.eyebrow} onChange={(eyebrow) => setDraft({ ...draft, about: { ...draft.about, eyebrow } })} />
          <TextField label="Highlight word" value={draft.about.highlight} onChange={(highlight) => setDraft({ ...draft, about: { ...draft.about, highlight } })} />
        </div>
        <TextField label="Title" value={draft.about.title} onChange={(title) => setDraft({ ...draft, about: { ...draft.about, title } })} />
        <TextArea label="Description" value={draft.about.description} onChange={(description) => setDraft({ ...draft, about: { ...draft.about, description } })} />
        <TextField label="Who we are eyebrow" value={draft.about.whoEyebrow} onChange={(whoEyebrow) => setDraft({ ...draft, about: { ...draft.about, whoEyebrow } })} />
        <TextArea label="Who we are" value={draft.about.whoBody} onChange={(whoBody) => setDraft({ ...draft, about: { ...draft.about, whoBody } })} />
        <TextField label="How we build eyebrow" value={draft.about.howEyebrow} onChange={(howEyebrow) => setDraft({ ...draft, about: { ...draft.about, howEyebrow } })} />
        {draft.about.howItems.map((item, index) => (
          <TextArea
            key={`how-${index}`}
            label={`How we build ${index + 1}`}
            value={item}
            onChange={(value) =>
              setDraft({
                ...draft,
                about: {
                  ...draft.about,
                  howItems: draft.about.howItems.map((entry, itemIndex) =>
                    itemIndex === index ? value : entry,
                  ),
                },
              })
            }
          />
        ))}
        {draft.about.stats.map((stat, index) => (
          <div key={`stat-${index}`} className="grid gap-5 sm:grid-cols-2">
            <TextField
              label={`Stat ${index + 1} label`}
              value={stat.label}
              onChange={(label) =>
                setDraft({
                  ...draft,
                  about: {
                    ...draft.about,
                    stats: draft.about.stats.map((entry, itemIndex) =>
                      itemIndex === index ? { ...entry, label } : entry,
                    ),
                  },
                })
              }
            />
            <TextField
              label={`Stat ${index + 1} value`}
              value={stat.value}
              onChange={(value) =>
                setDraft({
                  ...draft,
                  about: {
                    ...draft.about,
                    stats: draft.about.stats.map((entry, itemIndex) =>
                      itemIndex === index ? { ...entry, value } : entry,
                    ),
                  },
                })
              }
            />
          </div>
        ))}
        <TextField label="CTA label" value={draft.about.ctaLabel} onChange={(ctaLabel) => setDraft({ ...draft, about: { ...draft.about, ctaLabel } })} />
      </Section>

      <Section title="Contact page">
        <TextField label="Eyebrow" value={draft.contact.eyebrow} onChange={(eyebrow) => setDraft({ ...draft, contact: { ...draft.contact, eyebrow } })} />
        <TextField label="Title" value={draft.contact.title} onChange={(title) => setDraft({ ...draft, contact: { ...draft.contact, title } })} />
        <TextArea label="Description" value={draft.contact.description} onChange={(description) => setDraft({ ...draft, contact: { ...draft.contact, description } })} />
        <TextField label="Discord card eyebrow" value={draft.contact.discordEyebrow} onChange={(discordEyebrow) => setDraft({ ...draft, contact: { ...draft.contact, discordEyebrow } })} />
        <TextField label="Discord card title" value={draft.contact.discordTitle} onChange={(discordTitle) => setDraft({ ...draft, contact: { ...draft.contact, discordTitle } })} />
        <TextArea label="Discord card body" value={draft.contact.discordBody} onChange={(discordBody) => setDraft({ ...draft, contact: { ...draft.contact, discordBody } })} />
        <TextField label="Email card eyebrow" value={draft.contact.emailEyebrow} onChange={(emailEyebrow) => setDraft({ ...draft, contact: { ...draft.contact, emailEyebrow } })} />
        <TextField label="Email card title" value={draft.contact.emailTitle} onChange={(emailTitle) => setDraft({ ...draft, contact: { ...draft.contact, emailTitle } })} />
        <TextArea label="Email card body" value={draft.contact.emailBody} onChange={(emailBody) => setDraft({ ...draft, contact: { ...draft.contact, emailBody } })} />
        <TextField label="Email CTA" value={draft.contact.emailCta} onChange={(emailCta) => setDraft({ ...draft, contact: { ...draft.contact, emailCta } })} />
      </Section>

      <Section title="Privacy page">
        <TextField label="Eyebrow" value={draft.privacy.eyebrow} onChange={(eyebrow) => setDraft({ ...draft, privacy: { ...draft.privacy, eyebrow } })} />
        <TextField label="Title" value={draft.privacy.title} onChange={(title) => setDraft({ ...draft, privacy: { ...draft.privacy, title } })} />
        <TextArea label="Description" value={draft.privacy.description} onChange={(description) => setDraft({ ...draft, privacy: { ...draft.privacy, description } })} />
        <TextField label="Updated line" value={draft.privacy.updated} onChange={(updated) => setDraft({ ...draft, privacy: { ...draft.privacy, updated } })} />
        {draft.privacy.sections.map((section, index) => (
          <div key={`privacy-${index}`} className="space-y-5 rounded-xl border border-line p-4">
            <TextField
              label={`Section ${index + 1} title`}
              value={section.title}
              onChange={(title) =>
                setDraft({
                  ...draft,
                  privacy: {
                    ...draft.privacy,
                    sections: draft.privacy.sections.map((entry, itemIndex) =>
                      itemIndex === index ? { ...entry, title } : entry,
                    ),
                  },
                })
              }
            />
            {section.body.map((paragraph, paragraphIndex) => (
              <TextArea
                key={`privacy-${index}-${paragraphIndex}`}
                label={`Section ${index + 1} paragraph ${paragraphIndex + 1}`}
                value={paragraph}
                onChange={(value) =>
                  setDraft({
                    ...draft,
                    privacy: {
                      ...draft.privacy,
                      sections: draft.privacy.sections.map((entry, itemIndex) =>
                        itemIndex === index
                          ? {
                              ...entry,
                              body: entry.body.map((item, bodyIndex) =>
                                bodyIndex === paragraphIndex ? value : item,
                              ),
                            }
                          : entry,
                      ),
                    },
                  })
                }
              />
            ))}
          </div>
        ))}
      </Section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-void/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <p className={`text-sm ${status?.tone === "error" ? "text-magenta" : "text-lime"}`}>
            {status?.message ?? "Unsaved changes stay in this form until you save."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={reset} type="button">
              Reset defaults
            </Button>
            <Button onClick={save} type="button">
              {pending ? "Saving…" : "Save changes"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 rounded-[var(--radius)] border border-line bg-panel p-5 sm:p-7">
      <h2 className={typography.h2}>{title}</h2>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function TextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      <input className="admin-input" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      <textarea
        className="admin-input min-h-28"
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      <span className="flex items-center gap-3">
        <input
          type="color"
          className="h-12 w-14 cursor-pointer rounded-md border border-line bg-panel"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <input className="admin-input" value={value} onChange={(event) => onChange(event.target.value)} />
      </span>
    </label>
  );
}

function FeatureList({
  label,
  items,
  onChange,
}: {
  label: string;
  items: CopyFeature[];
  onChange: (items: CopyFeature[]) => void;
}) {
  return (
    <div className="space-y-4">
      <p className="eyebrow">{label}</p>
      {items.map((item, index) => (
        <div key={`${label}-${index}`} className="grid gap-4 rounded-xl border border-line p-4 sm:grid-cols-2">
          <TextField
            label={`${label} ${index + 1} title`}
            value={item.title}
            onChange={(title) =>
              onChange(items.map((entry, itemIndex) => (itemIndex === index ? { ...entry, title } : entry)))
            }
          />
          <TextArea
            label={`${label} ${index + 1} body`}
            value={item.body}
            onChange={(body) =>
              onChange(items.map((entry, itemIndex) => (itemIndex === index ? { ...entry, body } : entry)))
            }
          />
        </div>
      ))}
    </div>
  );
}
