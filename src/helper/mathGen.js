//mathGen takes choice of question type and returns a math question with answer
//Not sure if I should make choice be strings or int. I'm picking integers
const mathGen=(choice)=>{
    //Adding negative numbers
    let res=[];
    if(choice==1){
        const first_num= Math.floor(Math.random()*30+1)*-1;
        const second_num=Math.floor(Math.random()*30+1);
        const random=Math.floor(Math.random()*10+1);
        if(random<=5){
            const question=`${second_num}+${first_num}`;
            res.push(question);
            res.push(second_num+first_num);
        }
        else{
            const question=`${first_num}+${second_num}`;
            res.push(question);
            res.push(first_num+second_num);
        }
    }
    return res;
}

export default mathGen;