const module = function(a){
	if (a<0) return -a ;
		else return a ;
}

const print = function (n , s){
	let resultp = '';
	for (let f=n ;f>0 ; f-=1 ) {
		resultp += s
	}
	return resultp;
}

const diamonds = function(n){
	let resultd = '' ;
	if(n%2 === 0) {n=n+1;}
	
	for (let a=1 ; a<2*n ; a+=2)
	{
		let sp = module((n-a)/2);
		let st = n - 2*sp;
		resultd += print( sp, ' ') + print(st, '*') + '\n';
	}
	
	return (resultd);
	
};

console.log(diamonds(10));