import { helper } from "@ember/component/helper";

function plusOne(params) {
  return parseInt(params) + 1;
}

export default helper(plusOne);
