<script>
let array = [949 686 648 453 484 486 216 366 481, 362,
        86, 232, 403, 181, 822, 192, 731, 973, 547, 308,
        518, 852, 829, 950, 637, 821, 797, 972, 749, 309,
        67, 472, 910, 358, 564, 464, 643, 687, 137, 139,
        432, 695, 524, 98, 650, 615, 764, 796, 542, 157,
        456, 529, 448, 145, 874, 356, 538, 913, 585, 145,
        193, 383, 109, 915, 781, 527, 212, 621, 923, 959,
        847, 336, 576, 914, 638, 609, 674, 624, 722, 735,
        430, 403, 337, 987, 997, 814, 813, 490, 147, 341,
        254, 244, 721, 184, 554, 35, 946, 653, 158, 676];

for(let outer = 0; outer < array.length -1; outer++){
  for(let i = array.length-1; i > outer; i--){    
    if(array[i] < array[i-1]){
      let tmp = array[i];
      array[i] = array[i-1];
      array[i-1] = tmp;
    }
  }
}

console.log(array);
</script>