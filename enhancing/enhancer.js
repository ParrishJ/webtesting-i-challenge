module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item }
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 }
  } if (item.enhancement === 15 || item.enhancement === 16) {
    return { ...item, durability: item.durability - 10 };
  } if (item.durability > 16) {
    return { ...item, durability: item.durability - 10, enhancement: item.enhancement - 1 }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  let modifier = `[+${item.enhancement}]`
  if (item.enhancement === 0) {
    return { ...item }
  } if (item.enhancement > 0) {
    return { ...item, name: modifier.concat(' ', item.name) }
  }
}
