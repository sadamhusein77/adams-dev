import { useMemo, useState, useEffect, useRef } from "react";
import PortfolioCard from "@/components/features/portfolio/card/portfolio-card";
import PortfolioDetail from "@/components/features/portfolio/detail";
import Portfolioheader from "@/components/features/portfolio/header";
import { SAMPLE_PROJECTS } from "./projectData";
import InViewWrapper from "@/components/ui/in-view-wrapper";

export interface IProject {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: number;
  image: string;
  url: string;
}

export interface PortfolioPageProps {
  projects?: IProject[];
}

export default function Project({ projects = SAMPLE_PROJECTS }: PortfolioPageProps) {
  const [query, setQuery] = useState<string>("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sort, setSort] = useState<"newest" | "oldest" | "name">("newest");
  const [selected, setSelected] = useState<IProject | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return [...s].sort();
  }, [projects]);

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const q = query.trim().toLowerCase();
      const text = (p.title + " " + p.description).toLowerCase();
      const matchQuery = q === "" || text.includes(q);
      const matchTags = activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t));
      return matchQuery && matchTags;
    });

    if (sort === "newest") list = list.sort((a, b) => b.year - a.year);
    if (sort === "oldest") list = list.sort((a, b) => a.year - b.year);
    if (sort === "name") list = list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [projects, query, activeTags, sort]);

  function toggleTag(tag: string) {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (selected && modalRef.current) {
      const el = modalRef.current.querySelector<HTMLElement>(
        "button, a, input, textarea, [tabindex]:not([tabindex='-1'])"
      );
      if (el) el.focus();
    }
  }, [selected]);

  const handleSelected = (param: number) => {
    const filteredSelected = projects.filter(({id}: IProject) => id === param);
    setSelected(() => (filteredSelected[0]));
    setShowDialog(true);
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
    setTimeout(() => {
      setSelected(null);
    }, 250);
  }

  return (
    <div className="text-gray-900 p-6 md:p-12">
      <Portfolioheader
        activeTags={activeTags}
        setActiveTags={() => setActiveTags([])}
        allTags={allTags}
        query={query}
        setQuery={(val) => setQuery(val)}
        sort={sort}
        setSort={(val) => setSort(val as "newest" | "oldest" | "name")}
        toggleTag={(val) => toggleTag(val)}
      />

      <main className="max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <div className="rounded-md border border-dashed border-gray-300 p-8 text-center">
            <p className="text-gray-600">
              No projects matched your search / filters.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p: IProject) => (
              <InViewWrapper key={p.id}>
                <PortfolioCard
                  {...p}
                  handleSelected={handleSelected}
                />
              </InViewWrapper>
            ))}
          </section>
        )}
      </main>
      <PortfolioDetail
        showDialog={showDialog}
        handleClose={handleCloseDialog}
        selected={selected}
      />
    </div>
  );
}
