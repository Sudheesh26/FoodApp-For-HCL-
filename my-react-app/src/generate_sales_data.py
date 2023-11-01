import json
import random

food_items = [
    "Sambar Rice",
    "Coconut Rice",
    "Curd Rice",
    "Meals",
    "Vadas/Samosas",
    "Tomato Rice",
]


food_item_info = {
    "Sambar Rice": {"id": 1, "img": "../images/food-1.jpeg", "text": "\u20b940", "btn": "Order your Food"},
    "Coconut Rice": {"id": 2, "img": "../images/food-2.jpeg", "text": "\u20b935", "btn": "Order your Food"},
    "Curd Rice": {"id": 3, "img": "../images/food-3.jpeg", "text": "\u20b935", "btn": "Order your Food"},
    "Meals": {"id": 4, "img": "../images/food-4.jpeg", "text": "\u20b950", "btn": "Order your Food"},
    "Vadas/Samosas": {"id": 5, "img": "../images/food-5.jpeg", "text": "\u20b97", "btn": "Order your Food"},
    "Tomato Rice": {"id": 6, "img": "../images/food-6.jpeg", "text": "\u20b940", "btn": "Order your Food"},
}

def generate_random_sales_data(num_days, num_food_items):
    sales_data = []
    
    for day in range(num_days):
        
        food_order = random.sample(food_items, num_food_items)
        
        day_sales = []
        for food_item in food_order:
            day_sales.append({
                "id": food_item_info[food_item]["id"],
                "title": food_item,
                "img": food_item_info[food_item]["img"],
                "text": food_item_info[food_item]["text"],
                "btn": food_item_info[food_item]["btn"],
                "sales": random.randint(10, 51),  # Random sales between 10 and 50
            })
        
        sales_data.append(day_sales)
    
    return sales_data

num_days = 7
num_food_items = len(food_items)
random_sales_data = generate_random_sales_data(num_days, num_food_items)

js_variable_name = "arr"

js_data = f"let {js_variable_name} = {json.dumps(random_sales_data, indent=4)};"

js_file_path = "sales_data.js"

with open(js_file_path, "w") as js_file:
    js_file.write(js_data)
    js_file.write('export default arr;')

print(f"JavaScript object saved to {js_file_path}")
