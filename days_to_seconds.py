def days_to_seconds(days):
    try:
        days_number = int(days)
        if days_number <= 0:
            return "Invalid Input: Number must be positive"
        else:
            return days_number * 24 * 60 * 60
    except ValueError:
        return "Invalid Input: Please enter a valid number"

# Get input from user and split into list
user_input = input("Enter numbers separated by spaces: ")
numbers = user_input.split()

# Process each number
for num in numbers:
    x = days_to_seconds(num)
    print(f"{num} days = {x} seconds") 