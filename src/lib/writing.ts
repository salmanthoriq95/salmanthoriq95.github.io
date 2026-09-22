import { getCollection, type CollectionEntry } from "astro:content";
import { getLocalizedPath, type Locale } from "../i18n";

export type WritingEntry = CollectionEntry<"writing">;
export interface TopicSummary {
  segments: string[];
  count: number;
}

export async function getPublishedWriting() {
  const entries = await getCollection("writing", ({ data }) => !data.draft);

  return entries.sort(
    (first, second) =>
      second.data.publishedAt.getTime() - first.data.publishedAt.getTime(),
  );
}

export function getWritingSlug(entry: WritingEntry) {
  return entry.id.replace(/\.(md|mdx)$/i, "").replace(/^\/+|\/+$/g, "");
}

export function getWritingPath(entry: WritingEntry, locale: Locale) {
  return getLocalizedPath(locale, `/writing/${getWritingSlug(entry)}`);
}

export function getTopicSegments(entry: WritingEntry) {
  const segments = getWritingSlug(entry).split("/").filter(Boolean);
  return segments.slice(0, -1);
}

export function getTopicPath(segments: string[], locale: Locale) {
  return getLocalizedPath(locale, `/writing/topic/${segments.join("/")}`);
}

export function getTopicLabel(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getTopicPrefixes(entry: WritingEntry) {
  const segments = getTopicSegments(entry);

  return segments.map((_, index) => segments.slice(0, index + 1));
}

export function getAllTopicPaths(entries: WritingEntry[]) {
  const topics = new Map<string, string[]>();

  entries.forEach((entry) => {
    getTopicPrefixes(entry).forEach((segments) => {
      topics.set(segments.join("/"), segments);
    });
  });

  return [...topics.values()];
}

export function isEntryInTopic(entry: WritingEntry, topic: string[]) {
  const entryTopics = getTopicSegments(entry);
  return topic.every((segment, index) => entryTopics[index] === segment);
}

export function getDirectChildTopics(
  entries: WritingEntry[],
  parent: string[] = [],
) {
  const children = new Map<string, TopicSummary>();

  entries.forEach((entry) => {
    if (!isEntryInTopic(entry, parent)) return;

    const topics = getTopicSegments(entry);
    const child = topics[parent.length];
    if (!child) return;

    const segments = [...parent, child];
    const key = segments.join("/");
    const current = children.get(key);
    children.set(key, {
      segments,
      count: (current?.count ?? 0) + 1,
    });
  });

  return [...children.values()].sort((first, second) =>
    first.segments.at(-1)!.localeCompare(second.segments.at(-1)!),
  );
}

export function formatWritingDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getTranslation(
  entry: WritingEntry,
  entries: WritingEntry[],
) {
  if (!entry.data.translationKey) return undefined;

  return entries.find(
    (candidate) =>
      candidate.id !== entry.id &&
      candidate.data.translationKey === entry.data.translationKey &&
      candidate.data.language !== entry.data.language,
  );
}
