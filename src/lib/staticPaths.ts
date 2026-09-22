import { projects } from "../data/projects";
import {
  getAllTopicPaths,
  getPublishedWriting,
  getWritingSlug,
} from "./writing";

export function getProjectStaticPaths() {
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

export async function getWritingStaticPaths() {
  const entries = await getPublishedWriting();

  return entries.map((entry) => ({
    params: { slug: getWritingSlug(entry) },
    props: { entry },
  }));
}

export async function getTopicStaticPaths() {
  const entries = await getPublishedWriting();

  return getAllTopicPaths(entries).map((segments) => {
    const topic = segments.join("/");

    return {
      params: { topic },
      props: { topic },
    };
  });
}
