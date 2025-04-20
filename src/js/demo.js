// 11111
// 1   5
// 1   5
// 1   5
// 55555
let ans='';
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        if(i==1 || i==5) ans+=i;
        else
            if(j==1 || j==5){
                ans+=j;
            }
            else{
                ans+=' ';
            }
    }
    ans+="\n";
}

console.log(ans);