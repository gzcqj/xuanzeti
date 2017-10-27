var ans = new Array;
var done = new Array;
var yourAns = new Array;
var explainAnswer = new Array;

var score = 0;
ans[1] = "a";
ans[2] = "d";
ans[3] = "d";
ans[4] = "d";
ans[5] = "b";

explainAnswer[1]="你的回答是不正确，努力哟！";
explainAnswer[2]="你的回答是不正确，努力哟！";
explainAnswer[3]="你的回答是不正确，努力哟！";
explainAnswer[4]="你的回答是不正确，努力哟！";
explainAnswer[5]="你的回答是不正确，努力哟！";

function Engine(question, answer) {
yourAns[question]=answer;
}

function Score(){
var answerText = "看看你的成绩如何？\n------------------------------------";
score=0
for(i=1;i<=5;i++){
j=i+10
   answerText=answerText+"\n问题:"+j;
  if(ans[i]!=yourAns[i]){
    answerText=answerText+"\n正常的答案是： "+ans[i]+"\n"+explainAnswer[i]+"\n";
  }
  else{
    answerText=answerText+" \n对的 \n";
    score++;
  }
}

answerText=answerText+"\n你的成绩是 : "+score+"\n";

//now score the user
answerText=answerText+"结论 : ";
if(score<=0){
answerText=answerText+"0分，脸红吧，你应该好好多学点了！";
}
if(score>=1 && score <=2){
answerText=answerText+"你还是有些知识欠缺的！";
}
if(score>=3 && score <=3){
answerText=answerText+"很一般啊，刚刚及格！";
}
if(score>=4 && score <=4){
answerText=answerText+"做的还不错，但还需要努力！";
}
if(score>4){
answerText=answerText+"哇，你可真是厉害，高手，高手！！";
}

alert(answerText);

}
//  End -->
