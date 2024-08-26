const check = (number) => {
    return number.map((item) => {
      if (Array.isArray(item)) { return check(item);}
      return item}).flat()
  };