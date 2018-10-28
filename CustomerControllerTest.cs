using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CustomerProfile;
using CustomerProfile.Controllers;
using CustomerProfile.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace CustomerProfile.Tests.Controllers
{
    [TestClass]
    public class CustomerControllerTest
    {
        [TestMethod]
        public void Get()
        {
            // Arrange
            CustomersController controller = new CustomersController();

            // Act
            IQueryable<Customer> result = controller.GetCustomers();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(2, result.Count());
            Assert.AreEqual("1", result.ElementAt(0));
            Assert.AreEqual("Maity", result.ElementAt(1));
        }
    }
}
