export function filterData(searchInput, restaurants) {
  //console.log("sdfsfs");
  const filterData =
    restaurants.filter((restaurants) =>
      restaurants?.info?.name
        ?.toLowerCase()
        ?.includes(searchInput.toLowerCase())
    );
  return filterData;
}
export function filterDining(searchInput, dinings) {
  // console.log("dinings");
  const filterDining = dinings.filter((dining) =>
    dining?.title?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  // console.log(filterDining);
  return filterDining;
}
