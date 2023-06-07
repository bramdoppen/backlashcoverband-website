import cx from "classnames";
import BandMember, { BandMemberProperties } from "./BandMember";

interface BandMembersProperties {
  bandMembers: BandMemberProperties[];
}

export default function BandMembers({ bandMembers }: BandMembersProperties) {
  return (
    <section className="container-xl mx-auto">
      <div className="flex gap-5"></div>
    </section>
  );
}
