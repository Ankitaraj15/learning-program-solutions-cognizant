IF OBJECT_ID('dbo.sp_InsertEmployee','P') IS NOT NULL
    DROP PROCEDURE dbo.sp_InsertEmployee;
GO

CREATE PROCEDURE dbo.sp_InsertEmployee
    @FirstName    VARCHAR(50),
    @LastName     VARCHAR(50),
    @DepartmentID INT,
    @Salary       DECIMAL(10,2),
    @JoinDate     DATE
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO dbo.Employees
          (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES
          (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO

EXEC sp_GetEmployeesByDepartment 2;