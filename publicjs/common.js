const pubFuc = {
	// 秒数格式化 00:00
	secondFormat:(second)=>{
		var sec = second%60;
		var min = Math.floor(second/60);
		if(min.toString().length < 2){
			min = '0'+ min
		}
		if(sec.toString().length < 2){
			sec = '0' + sec
		}
		return min + ':'+sec
	}
}

export default pubFuc;