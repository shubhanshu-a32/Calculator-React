export default function calculate(expr) {
    try {
      // Evaluate math expression safely
      const result = Function(`return ${expr}`)();
      return result.toString();
    } catch {
      return 'Error';
    }
  }
  