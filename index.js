let saveEl = document.getElementById("save-el") // 이전 승객수 id
let countEl = document.getElementById("count-el") // 카운터 숫자 id
let count = 0 // 카운터 숫자 초기화

// 카운터 숫자 증가 함수
function increment()
{
    count += 1
    countEl.textContent = count 

}


// 카운터 숫자 저장 함수
function save()
{
    let countStr = count + " - "
    saveEl.textContent += countStr // 숫자가 쭉 입력 되도록
    
    // 카운터 숫자 0으로
    countEl.textContent = 0
    count = 0
    
}



