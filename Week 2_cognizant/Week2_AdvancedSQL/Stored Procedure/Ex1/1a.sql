IF OBJECT_ID('dbo.sp_GetEmployeesByDepartment','P') IS NOT NULL
    DROP PROCEDURE dbo.sp_GetEmployeesByDepartment;
GO

CREATE PROCEDURE dbo.sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT  e.EmployeeID,
            e.FirstName,
            e.LastName,
            d.DepartmentName,
            e.Salary,
            e.JoinDate
    FROM    dbo.Employees   AS e
    INNER   JOIN dbo.Departments AS d
           ON d.DepartmentID = e.DepartmentID
    WHERE   e.DepartmentID = @DepartmentID
    ORDER BY e.EmployeeID;
END;
GO
