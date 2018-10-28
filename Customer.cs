using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CustomerProfile.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }
        [Required]
        [StringLength(50,MinimumLength =3)]
        public string ForeName { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2)]
        public string SurName { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DOB { get; set; }
        [Required]
        public string Gender { get; set; }
        public string HomePhone { get; set; }
        public string WorkPhone { get; set; }
        public string MobilePhone { get; set; }
    }
}