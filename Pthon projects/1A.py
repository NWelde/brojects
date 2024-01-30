def my_pow(x, y):
  """
  This function calculates the power of a number without using the pow() function.

  Args:
      x: The base number.
      y: The exponent.

  Returns:
      The result of x raised to the power of y.
  """
  if y == 0:
    return 1
  elif y == 1:
    return x
  else:
    return x * my_pow(x, y-1)

# Example usage
result = my_pow(4, 2)
print(result)  # Output: 16