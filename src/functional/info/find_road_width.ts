function findRoadWidth(): number {
  const road: HTMLElement | null = document.querySelector('.car-container');
  if (road) {
    const roadWidth: number = road.offsetWidth;
    return roadWidth;
  }
  return 0;
}

export default findRoadWidth;
