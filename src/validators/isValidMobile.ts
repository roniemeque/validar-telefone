const isValidMobile = (phone: string): boolean => {
  switch (phone.length) {
    case 9:
      return phone[0] === "9";
    case 11:
      return phone[2] === "9";
    case 13:
      return phone[4] === "9";
  }

  return true;
};
export default isValidMobile;
