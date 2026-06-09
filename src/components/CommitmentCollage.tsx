import { images } from "@/data/site";
import { WhatSetsUsApartBox } from "@/components/WhatSetsUsApartBox";

export function CommitmentCollage() {
  return (
    <div className="commitment-collage">
      <div className="commitment-collage-main">
        <img
          src={images.commitmentMain}
          alt="Participant enjoying community support"
          width={834}
          height={834}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="commitment-collage-overlay">
        <img
          src={images.commitmentOverlay}
          alt="Support worker assisting a participant"
          width={640}
          height={427}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <p className="commitment-collage-caption">{images.commitmentOverlayCaption}</p>
      </div>

      <div className="commitment-collage-apart">
        <WhatSetsUsApartBox />
      </div>
    </div>
  );
}
