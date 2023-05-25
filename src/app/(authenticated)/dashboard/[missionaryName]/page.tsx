export default function Dashboard({
  params,
}: {
  params: { missionaryName: string };
}) {
  return <div>Dashboard do missionario {params.missionaryName}</div>;
}
