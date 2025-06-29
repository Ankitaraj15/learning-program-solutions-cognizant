IF OBJECT_ID('sp_CountEmployeesByDepartment', 'P') IS NOT NULL
    DROP PROCEDURE sp_CountEmployeesByDepartment;
GO

CREATE PROCEDURE sp_CountEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        COUNT(*) AS TotalEmployees
    FROM 
        Employees
    WHERE 
        DepartmentID = @DepartmentID;
END;
GO

EXEC sp_CountEmployeesByDepartment @DepartmentID = 1;
