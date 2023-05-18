let dummyText:string = "아버지가방에들어가신다.";

let refineNounData:string[] = ["아버지", "방"];

let spacing:string = " ";

function spacingLetter(text:string, nounData:string[], spacing:string):string {
  let result:string = "";
  for (let i = 0; i<nounData.length; i++) {
    if (text.includes(nounData[i])) {
      const target = text.indexOf(nounData[i]);
      //* 작성중...
    }
  }
  
  return result;
}

spacingLetter(dummyText, refineNounData, spacing);