/**
 * STYLE REMINDER — Each project is a three-step editorial case study derived from
 * the PDF: logo cover → written brief → identity applications. The PDF pages stay intact.
 */
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react";
import { Link, useRoute } from "wouter";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CaseStudy() {
  const [, params] = useRoute("/work/:slug");
  const study = getCaseStudy(params?.slug ?? "");
  const [expandedPage, setExpandedPage] = useState<(typeof caseStudies)[number]["pages"][number] | null>(null);

  if (!study) {
    return (
      <main className="case-study not-found-study">
        <Link href="/#work" className="case-back"><ArrowLeft size={16} /> Back to selected work</Link>
        <h1>Case study not found.</h1>
      </main>
    );
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const previous = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="case-study">
      <header className="case-header">
        <Link href="/" className="wordmark" aria-label="Back to portfolio home">
          <img src="/assets/hassan-logo.png" alt="Hassan Mohamed" />
        </Link>
        <Link href="/#work" className="case-back"><ArrowLeft size={16} aria-hidden="true" /> Back to selected work</Link>
      </header>

      <section className="case-intro" aria-labelledby="case-title">
        <p className="section-tag"><span>HM/{study.index}</span> Case study</p>
        <div>
          <p className="case-discipline">{study.discipline}</p>
          <h1 id="case-title">{study.title}</h1>
        </div>
        <p className="case-scope">{study.clients}</p>
      </section>

      <section className="case-pages" aria-label={`${study.title} project pages`}>
        {study.pages.map((page, pageIndex) => (
          <figure className="case-page" key={page.image}>
            <figcaption>
              <span>{String(pageIndex + 1).padStart(2, "0")} / {page.kind}</span>
              <span>{page.label}</span>
            </figcaption>
            <button
              className="case-page-media"
              type="button"
              onClick={() => setExpandedPage(page)}
              aria-label={`View ${page.label} in full size`}
            >
              <img src={page.image} alt={page.alt} />
              <span className="case-zoom-hint"><Maximize2 size={14} aria-hidden="true" /> View full size</span>
            </button>
          </figure>
        ))}
      </section>

      <Dialog open={Boolean(expandedPage)} onOpenChange={(open) => !open && setExpandedPage(null)}>
        <DialogContent className="case-image-dialog" showCloseButton={false}>
          <DialogTitle className="sr-only">{expandedPage?.label ?? "Case study page"}</DialogTitle>
          <DialogDescription className="sr-only">Full-size project page image. Press Escape or close to return.</DialogDescription>
          <DialogClose className="case-image-close" aria-label="Close full-size page"><X size={19} aria-hidden="true" /></DialogClose>
          {expandedPage && <img src={expandedPage.image} alt={expandedPage.alt} />}
        </DialogContent>
      </Dialog>

      <nav className="case-navigation" aria-label="Project navigation">
        <Link href={`/work/${previous.slug}`} className="case-nav-link case-nav-previous">
          <ArrowLeft size={18} aria-hidden="true" />
          <span><small>Previous project</small>{previous.title}</span>
        </Link>
        <Link href="/#work" className="case-all-projects">All work <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <Link href={`/work/${next.slug}`} className="case-nav-link case-nav-next">
          <span><small>Next project</small>{next.title}</span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </nav>
    </main>
  );
}
