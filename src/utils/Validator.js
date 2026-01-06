// ============================================
// 📌 템플릿: 그대로 복붙하고 Controller에서 호출만!
// 사용법: Validator.validateNotEmpty(value);
// ============================================

class Validator {
  
  // ========== 기본 검증 ==========
  
  static validateNotEmpty(value) {
    if (!value || value.trim() === '') {
      throw new Error('[ERROR] 값이 비어있습니다.');
    }
  }

  static validateExists(value) {
    if (value === null || value === undefined) {
      throw new Error('[ERROR] 값이 존재하지 않습니다.');
    }
  }

  // ========== 숫자 검증 ==========
  
  static validateNumber(value) {
    if (isNaN(value) || isNaN(Number(value))) {
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
  }

  static validatePositive(value) {
    this.validateNumber(value);
    if (Number(value) <= 0) {
      throw new Error('[ERROR] 양수여야 합니다.');
    }
  }

  static validateNonNegative(value) {
    this.validateNumber(value);
    if (Number(value) < 0) {
      throw new Error('[ERROR] 0 이상이어야 합니다.');
    }
  }

  static validateInteger(value) {
    this.validateNumber(value);
    if (!Number.isInteger(Number(value))) {
      throw new Error('[ERROR] 정수여야 합니다.');
    }
  }

  static validateRange(value, min, max) {
    this.validateNumber(value);
    const num = Number(value);
    if (num < min || num > max) {
      throw new Error(`[ERROR] ${min}에서 ${max} 사이의 값이어야 합니다.`);
    }
  }

  static validateMin(value, min) {
    this.validateNumber(value);
    if (Number(value) < min) {
      throw new Error(`[ERROR] ${min} 이상이어야 합니다.`);
    }
  }

  static validateMax(value, max) {
    this.validateNumber(value);
    if (Number(value) > max) {
      throw new Error(`[ERROR] ${max} 이하여야 합니다.`);
    }
  }

  static validateDivisible(value, divisor) {
    this.validateNumber(value);
    if (Number(value) % divisor !== 0) {
      throw new Error(`[ERROR] ${divisor}로 나누어떨어져야 합니다.`);
    }
  }

  // ========== 문자열 검증 ==========
  
  static validateLength(str, length) {
    if (str.length !== length) {
      throw new Error(`[ERROR] 길이는 ${length}이어야 합니다.`);
    }
  }
static validateMaxLength(input, length) {
    if (input.length !== length) {
      throw new Error("[ERROR] 3자리 숫자를 입력해야 합니다.");
    }
  }

  static validateReplay(input) {
    if (input !== "1" && input !== "2") {
      throw new Error("[ERROR] 1 또는 2만 입력 가능합니다.");
    }
  }

  static validateMaxLength(str, maxLength) {
    if (str.length > maxLength) {
      throw new Error(`[ERROR] 최대 ${maxLength}자 이하여야 합니다.`);
    }
  }

  static validatePattern(str, pattern) {
    if (!pattern.test(str)) {
      throw new Error('[ERROR] 형식이 올바르지 않습니다.');
    }
  }

  static validateNumericString(str) {
    if (!/^\d+$/.test(str)) {
      throw new Error('[ERROR] 숫자로만 이루어져야 합니다.');
    }
  }

  static validateAlphaString(str) {
    if (!/^[a-zA-Z]+$/.test(str)) {
      throw new Error('[ERROR] 알파벳으로만 이루어져야 합니다.');
    }
  }

  // ========== 배열 검증 ==========
  
  static validateArray(value) {
    if (!Array.isArray(value)) {
      throw new Error('[ERROR] 배열이 아닙니다.');
    }
  }

  static validateArrayLength(array, length) {
    this.validateArray(array);
    if (array.length !== length) {
      throw new Error(`[ERROR] ${length}개여야 합니다.`);
    }
  }

  static validateArrayMinLength(array, minLength) {
    this.validateArray(array);
    if (array.length < minLength) {
      throw new Error(`[ERROR] 최소 ${minLength}개 이상이어야 합니다.`);
    }
  }

  static validateArrayMaxLength(array, maxLength) {
    this.validateArray(array);
    if (array.length > maxLength) {
      throw new Error(`[ERROR] 최대 ${maxLength}개 이하여야 합니다.`);
    }
  }

  static validateNoDuplicate(array) {
    this.validateArray(array);
    const uniqueArray = [...new Set(array)];
    if (uniqueArray.length !== array.length) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  static validateArrayNotEmpty(array) {
    this.validateArray(array);
    if (array.length === 0) {
      throw new Error('[ERROR] 배열이 비어있습니다.');
    }
  }

  static validateAllNumbers(array) {
    this.validateArray(array);
    if (!array.every(item => !isNaN(item))) {
      throw new Error('[ERROR] 모든 요소가 숫자여야 합니다.');
    }
  }

  static validateAllInRange(array, min, max) {
    this.validateArray(array);
    this.validateAllNumbers(array);
    if (!array.every(num => num >= min && num <= max)) {
      throw new Error(`[ERROR] 모든 값이 ${min}에서 ${max} 사이여야 합니다.`);
    }
  }

  // ========== 선택지 검증 ==========
  
  static validateIncludes(value, allowedValues) {
    if (!allowedValues.includes(value)) {
      throw new Error(`[ERROR] ${allowedValues.join(', ')} 중 하나여야 합니다.`);
    }
  }

  static validateYesNo(value) {
    const upperValue = value.toUpperCase();
    if (upperValue !== 'Y' && upperValue !== 'N') {
      throw new Error('[ERROR] Y 또는 N을 입력해야 합니다.');
    }
  }

  static validateBoolean(value) {
    if (typeof value !== 'boolean') {
      throw new Error('[ERROR] true 또는 false여야 합니다.');
    }
  }
}

export default Validator;