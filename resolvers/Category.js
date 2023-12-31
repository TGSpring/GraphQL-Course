

exports.Category = {
    products: ({id: categoryId}, {filter}, { db}) => {
     const categoryProducts = db.products.filter((product) => product.categoryId === categoryId);
     let filteredCategoryProducts = categoryProducts;
     if(filter){
        const{ onSale, avgRating } = filter
        if(filter.onSale === true) {
            filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                return product.onSale
            })
        }
        if([1,2,3,4,5].includes(avgRating)){
            filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
                let sumRating = 0;
                let numberOfReviews = 0;
                reviews.forEach((review) => {
                    if(review.categoryId === product){
                        sumRating += review.rating;
                        numberOfReviews++;
                    }
                });
                const avgCategoryRating = sumRating / numberOfReviews;
                return avgCategoryRating >= avgRating;
            })
        }
    }
    
    return filteredCategoryProducts

    },
  };