//mathGen takes choice of question type and returns a math question with answer
//Not sure if I should make choice be strings or int. I'm picking integers
const mathGen=(choice)=>{
    //Adding negative numbers
    let res=[];
    const first_num= Math.floor(Math.random()*30+1)*-1;
    const second_num=Math.floor(Math.random()*30+1);
    const random=Math.floor(Math.random()*10+1);
    if(choice==="Negative Addition"){
        if(random<=5){
            const question=`${second_num}+(${first_num})`;
            res.push(question);
            res.push(second_num+first_num);
        }
        else{
            const question=`${first_num}+${second_num}`;
            res.push(question);
            res.push(first_num+second_num);
        }
    }
    else if(choice=="Many times Many"){
        if(random<=5){
            const question=`What is (x+(${first_num}))*(x^2+${second_num}) when x=${random}`;
            res.push(question);
            res.push((random+first_num)*((random*random)+second_num));
        }
        else{
            const question=`What is (x+${second_num})*(x^2+(${first_num})) when x=${random}`;
            res.push(question);
            res.push((random+second_num)*((random*random)+first_num));
        }
    }
    // else if(choice=="Parallel or Intersecting lines"){

    // }
    return res;
}

export default mathGen;