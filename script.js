document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('myTable');

    // 리스트 생성
    const stringList = [
        "First line of text",
        "Second line of text",
        "Third line of text",
        "Fourth line of text",
        "Fifth line of text"
    ];

    // 리스트의 길이만큼 행(row)을 생성
    const numRows = stringList.length;
    const numCols = 2;

    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();

        // 첫 번째 셀: 인덱스 값
        const cell1 = row.insertCell();
        cell1.textContent = i + 1;

        // 두 번째 셀: 리스트의 문자열 내용
        const cell2 = row.insertCell();
        cell2.textContent = stringList[i];
    }
});