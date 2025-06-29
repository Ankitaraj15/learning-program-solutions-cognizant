SELECT *
FROM (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankPos
    FROM Products
) AS Ranked
WHERE DenseRankPos <= 3;
