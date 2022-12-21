let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
let index1 = m - 1;
let index2 = n - 1;
let index3 = m + n - 1;
while (index2 >= 0) {
  if (index1 >= 0 && nums1[index1] >= nums2[index2]) {
      nums1[ index3-- ] = nums1[ index1-- ];
      console.log(nums1);
      console.log( nums1[ index1 ] );
      
  } else
  {

      nums1[ index3-- ] = nums2[ index2-- ]
      console.log(nums1);
  }
}
console.log(nums1[index3]);
console.log(nums1);

/*
let index1 = m-1;
    let index2 = n-1;
    let index3 = m+n-1;
    while(index2>=0){
        if(index1>=0 && nums1[index1] >= nums2[index2]) 
        nums1[index3--] = nums1[index1--]
        else 
        nums1[index3--] = nums2[index2--]
    }
    */
