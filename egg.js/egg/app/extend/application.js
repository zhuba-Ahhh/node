module.exports = {
  // 方法扩展
  currentTime() {
    const current = getTime();
    return current;
  },
};

function getTime() {
  const now = new Date();
  const year = now.getFullYear(); // 得到年份
  const month = now.getMonth() + 1; // 得到月份
  const date = now.getDate(); // 得到日期
  const hour = now.getHours(); // 得到小时数
  const minute = now.getMinutes(); // 得到分钟数
  const second = now.getSeconds(); // 得到秒数
  const nowTime = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  return nowTime;
}
