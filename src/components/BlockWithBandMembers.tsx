import BandMember, { BandMemberProperties } from "./BandMember";
import MaxWidth from "./MaxWidth";

interface BandMembersProperties {
  bandMembers: BandMemberProperties[];
}

export default function BandMembers({ bandMembers }: BandMembersProperties) {
  return (
    <section className="my-container">
      <MaxWidth>
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-4xl font-semibold uppercase">De band</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {bandMembers.map((member: BandMemberProperties) => (
              <BandMember
                key={member._key}
                firstName={member.firstName}
                instrument={member.instrument}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
