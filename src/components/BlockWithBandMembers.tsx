import BandMember, { BandMemberProperties } from "./BandMember";
import MaxWidth from "./MaxWidth";

interface BandMembersProperties {
  bandMembers: BandMemberProperties[];
}

export default function BandMembers({ bandMembers }: BandMembersProperties) {
  return (
    <section className="my-container" id="over">
      <MaxWidth>
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-4xl font-semibold uppercase">De band</h2>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bandMembers.map((member: BandMemberProperties) => (
              <BandMember
                key={member._key}
                firstName={member.firstName}
                instrument={member.instrument}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
