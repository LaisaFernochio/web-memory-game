function TestHelpers() {
  this.call_test_case = function(info, test_case_func) {
    console.info(info);

    test_case_func();
  }

  this.check = function(is_ok, error_msg) {
    if(!is_ok)
      throw error_msg;
  }
}

test_helpers = new TestHelpers();
