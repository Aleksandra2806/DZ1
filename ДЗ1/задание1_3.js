//задание3 

function vegetablesclone() {
  const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  function copyArr(arr) {
    return arr.slice(0);
  }
  const clonevegetables = copyArr(vegetables);
  alert(clonevegetables);

//
  const vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  function copyArr1(arr1) {
    return [...arr1];
  }
  const clonevegetables1 = copyArr1(vegetables1);
  alert(clonevegetables1);

//
  const vegetables2 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
  function copyArr2(arr2) {
    return Array.from(arr2);
  }
  const clonevegetables2 = copyArr2(vegetables2);
  alert(clonevegetables2);
}