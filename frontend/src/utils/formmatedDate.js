const formattedDate = (dateStr) => {
    const date = new Date(dateStr);

    const formatted = date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false, // 24시간 형식
    });

    return formatted;
};

export default formattedDate;
