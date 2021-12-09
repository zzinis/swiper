// new Isotope("section",{
//     itemSelector: ".item",
//     precentPosition: true,
//     transitionDuraition: "0.8s",
//     masonry:{
//         columWidth: ".item-sizer"
//     }
// })

// $('.grid').isotope({
//     itemSelector: '.item',
//     percentPosition: true,
//     masonry: {
//       columnWidth: '.item-sizer'
//     }
//   });

//   var elem = document.querySelector('.grid');


// // element argument can be a selector string
// //   for an individual element
// var iso = new Isotope( '.grid', {
//   // options
//   itemSelector: '.item',
//   percentPosition: true,
//     masonry: {
//       columnWidth: '.item-sizer'
//     }
// });

$('section').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.item',
  percentPosition: true,
  masonry: {
    // set to the element
    columnWidth: '.item-sizer'
  }
})