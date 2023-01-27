const lda = require('lda');
const { DUMMY_DATA } = require('./DummyData');

const ldaTagCreation = (txt) => {
  //   var allwords = txt[0].join('\n');

  //   //console.log('all words now', allwords);
  //   var documents = allwords.match(/[^\.!\?]+[\.!\?]+/g);
  //   var result = lda(documents, 10, 50);
  //   //console.log('lda', result);
  //   return result;
  DUMMY_DATA.forEach((post) => {
    var text = post.Description;
    var documents = text.match(/[^\.!\?]+[\.!\?]+/g);
    var result = lda(documents, 2, 5);
    console.log(result);
  });
};

// const ldaTagSummarizer = (userLDA, taskArray, name) => {
//   //console.log('task', taskArray);
//   let maximumSummation = 0;
//   let matched = [];
//   userLDA.forEach((topicArray) => {
//     let oneTopicSummation = 0;
//     topicArray.forEach((termObject) => {
//       taskArray.forEach((task) => {
//         if (task == termObject.term) {
//           //console.log('Match', task);
//           oneTopicSummation = oneTopicSummation + termObject.probability;
//           matched.push(task);
//         }
//       });
//     });
//     if (oneTopicSummation > maximumSummation) {
//       maximumSummation = oneTopicSummation;
//     }
//     //console.log('End of One Topic\n');
//   });
//   console.log(name + ' scored ' + maximumSummation);
//   console.log('matches', matched);
//   console.log(' ');
// };

// module.exports = { ldaTagCreation, ldaTagSummarizer };

ldaTagCreation();
