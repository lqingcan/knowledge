// 表单校验器
class FormValidator {
  constructor() {
    this.fields = {};
    this.errors = {};
    this.validators = {
      required: this.required.bind(this),
      email: this.email.bind(this),
      minLength: this.minLength.bind(this),
      regex: this.regex.bind(this),
      minValue: this.minValue.bind(this),
      maxLength: this.maxLength.bind(this),
    };
    this.customValidators = {};
  }

  // 添加表单字段和规则
  addField(name, rules) {
    this.fields[name] = rules;
  }

  // 添加自定义检验器
  addCustomValidator(name, validatorFn) {
    this.customValidators[name] = validatorFn;
  }

  // 开始校验
  validate(formData) {
    this.errors = {};

    for (const fieldName in this.fields) {
      if (this.fields.hasOwnProperty(fieldName)) {
        const fieldRules = this.fields[fieldName];
        const fieldValue = formData[fieldName];

        for (const rule of fieldRules) {
          const { ruleName, params, errorMessage } = this.parseRule(rule);
          const isValid = this.validateRule(ruleName, fieldValue, params);

          if (!isValid) {
            this.addError(fieldName, errorMessage);
          }
        }
      }
    }

    return Object.keys(this.errors).length === 0;
  }

  // 表单规则格式化
  parseRule(rule) {
    let ruleName;
    let params;
    let errorMessage;

    if (typeof rule === 'string') {
      const ruleParts = rule.split('#');
      ruleName = ruleParts.shift();
      params = ruleParts;
      errorMessage = params.pop();
    } else if (Array.isArray(rule)) {
      [ruleName, ...params] = rule;
      errorMessage = params.pop();
    }

    return {
      ruleName,
      params,
      errorMessage,
    };
  }

  // 添加错误信息
  addError(fieldName, errorMessage) {
    if (!this.errors[fieldName]) {
      this.errors[fieldName] = [];
    }

    this.errors[fieldName].push(errorMessage);
  }

  // 规则校验
  validateRule(ruleName, value, params) {
    if (this.validators[ruleName]) {
      return this.validators[ruleName](value, ...params);
    }
    if (this.customValidators[ruleName]) {
      return this.customValidators[ruleName].call(this, value, ...params);
    }
    console.error(`Validator for rule "${ruleName}" does not exist.`);
    return false;
  }

  // 规则：必填
  required(value) {
    if (typeof value === 'undefined') return false;

    return value.trim() !== '';
  }

  // 规则：邮箱
  email(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  // 规则：最小长度
  minLength(value, length) {
    return value.length >= length;
  }

  // 规则：最大程度
  maxLength(value, length) {
    return value.length <= length;
  }

  // 最小值限制 当前值，限制值
  minValue(value, limit) {
    return Number(value) >= Number(limit);
  }

  // 规则：统一正则
  regex(value, pattern) {
    if (!pattern) return;
    const regex = new RegExp(pattern.replace(/\\\\/g, '\\'));
    return regex.test(value);
  }
}

// 导出表单校验类
export default FormValidator;

/*
// 使用示例
const validator = new FormValidator();

// 添加字段及校验规则
validator.addField('name', ['required:Name is required.']);
validator.addField('email', ['required:Email is required.', 'email:Invalid email address.']);
validator.addField('password', ['required:Password is required.',
	'minLength:6:Password should be at least 6 characters long.'
]);
validator.addField('phone', ['required:Phone number is required.', 'regex:^1[3456789]\\d{9}$:Invalid phone number.']);
validator.addField('text', ['required:text is required.', 'maxLength:10:text最大长度为10']);

// 添加自定义校验方法
validator.addCustomValidator('customRule', function(value, param) {
	return value === param;
});

// 表单数据
const formData = {
	name: 'John Doe',
	email: 'johndo@eexample.com',
	password: 'password123',
	phone: '13234567890',
	text: '123455654545646546546546546'
};

// 进行校验
const isValid = validator.validate(formData);

if (isValid) {
	console.log('Form validation passed.');
} else {
	console.log('Form validation failed.');
	console.log(validator.errors);
}
*/
