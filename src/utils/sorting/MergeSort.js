/**
 * Merge Sort class for getting the sorted array
 * @param {*} array
 */
function MergeSort(array) {
  this.array = array;
  this.workspace = [];
  /**
   * Getting the array elements
   */
  this.getArray = function () {
    return this.array;
  };
  /**
   * Idea of the merge sort is to have 2 sorted arrays and merge them.
   */
  this.mergeSort = function (lowerBound, highPtr, upperBound) {
    let j = 0,
      lowPtr = lowerBound,
      mid = highPtr - 1,
      n = upperBound - lowerBound + 1;

    while (lowPtr <= mid && highPtr <= upperBound) {
      if (this.array[lowPtr] < this.array[highPtr]) {
        this.workspace[j++] = this.array[lowPtr++];
      } else {
        this.workspace[j++] = this.array[highPtr++];
      }
    }
    while (lowPtr <= mid) {
      this.workspace[j++] = this.array[lowPtr++];
    }
    while (highPtr <= upperBound) {
      this.workspace[j++] = this.array[highPtr++];
    }

    for (j = 0; j < n; j++) {
      this.array[lowerBound + j] = this.workspace[j];
    }
  };

  /**
   * recursively calling the merge sort to break the array in 2 with each pass
   */
  this.recursiveMergeSort = function (
    lowerBound = 0,
    upperBound = this.array.length - 1
  ) {
    if (lowerBound == upperBound) return;
    else {
      let mid = Math.floor((lowerBound + upperBound) / 2);
      this.recursiveMergeSort(lowerBound, mid);
      this.recursiveMergeSort(mid + 1, upperBound);
      this.mergeSort(lowerBound, mid + 1, upperBound);
    }
  };
}

/**
 * please make this variable as true
 */
let test = false;
if (test) {
  let mergeSort = new MergeSort([64, 21, 33, 70, 12, 85, 44, 3]);
  console.log(`Before sorting ...`, mergeSort.getArray());
  mergeSort.recursiveMergeSort();
  console.log(`After sorting ...`, mergeSort.getArray());
}

module.exports = MergeSort;
