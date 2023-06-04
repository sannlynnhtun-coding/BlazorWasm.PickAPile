using System;
using System.Collections.Generic;

namespace BlazorWasm.PickAPile.Models;

public class TblUser
{
    public string UserId { get; set; } = null!;

    public string UserName { get; set; } = null!;

    public string Password { get; set; } = null!;

    public bool DelFlag { get; set; }
}
