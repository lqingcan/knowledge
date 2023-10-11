// 简单模糊搜索
export function fuzzySearch(pattern, array) {
  // 使用正则表达式创建模式，不区分大小写
  const regex = new RegExp(pattern, 'i');

  // 使用 Array.prototype.filter() 过滤匹配的项
  const matches = array.filter(item => regex.test(item));

  return matches;
}

// 示例用法
// var fruits = ["apple", "banana", "orange", "grapefruit", "kiwi"];
// var results = fuzzySearch("an", fruits);
// console.log(results);  // ["banana", "orange", "grapefruit"]

// 简单时间格式化
export function formatDate(format) {
  const date = new Date();
  const tokens = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    hh: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
  };

  return format.replace(/(YYYY|MM|DD|hh|mm|ss)/g, match => tokens[match]);
}

// 使用示例
// const formattedDate = formatDate(currentDate, 'YYYY-MM-DD hh:mm:ss');
// console.log(formattedDate); // 输出类似于：2023-08-22 14:30:15
