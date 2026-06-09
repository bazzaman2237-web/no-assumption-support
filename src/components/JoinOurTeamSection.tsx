import { Briefcase, CheckCircle2, Mail, Phone } from "lucide-react";
import { joinOurTeam, siteContact } from "@/data/site";
import { mailtoLinks } from "@/lib/mailto";

export function JoinOurTeamSection() {
  return (
    <section className="section-white section-pad-sm border-t border-border" aria-labelledby="join-our-team-heading">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <div className="icon-badge size-14 mx-auto">
            <Briefcase className="size-6" />
          </div>
          <span className="section-label mt-6 block">Careers</span>
          <h2 id="join-our-team-heading" className="mt-3 font-display text-3xl md:text-4xl font-semibold text-deep">
            {joinOurTeam.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{joinOurTeam.intro}</p>
        </div>

        <div className="mt-10 lg:mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          <div className="card-elevated rounded-3xl p-7 md:p-8 lg:sticky lg:top-28">
            <h3 className="font-display text-xl font-semibold text-deep">{joinOurTeam.trainingTitle}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{joinOurTeam.trainingBody}</p>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">Send your application and documents to:</p>
              <a
                href={`mailto:${siteContact.email}`}
                className="mt-2 inline-block font-semibold text-deep break-all hover:text-primary transition-colors"
              >
                {siteContact.email}
              </a>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                <a href={mailtoLinks.jobApplication} className="btn-primary">
                  <Mail className="size-4" /> {joinOurTeam.applyLabel}
                </a>
                <a href={siteContact.phoneHref} className="btn-teal">
                  <Phone className="size-4" /> Call Us
                </a>
              </div>
            </div>
          </div>

          <div className="card-elevated rounded-3xl p-7 md:p-8 bg-warm/40">
            <h3 className="font-display text-xl font-semibold text-deep">Required documents</h3>
            <p className="mt-2 text-sm text-muted-foreground">{joinOurTeam.documentsIntro}</p>
            <ul className="mt-5 space-y-3">
              {joinOurTeam.documents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-deep/90 leading-relaxed">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
