def winterSale(discount, priceAfterDiscount):
    original_price = priceAfterDiscount / (1 - (discount / 100))
    return f"{original_price:.2f}"

discount, priceAfterDiscount = map(float, input().split())
print(winterSale(discount, priceAfterDiscount))
