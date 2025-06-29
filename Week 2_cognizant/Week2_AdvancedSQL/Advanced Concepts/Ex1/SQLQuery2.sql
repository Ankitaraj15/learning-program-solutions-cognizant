SELECT *
FROM (
    SELECT 
        ProductID,
        ProductName,
        Category,
        Price,
        RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankPos
    FROM Products
) AS Ranked
WHERE RankPos <= 3;
