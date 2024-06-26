﻿using System.Collections.Generic;

namespace Aircompany.Planes
{
    public abstract class Plane
    {
        public string Model { get; }
        public int MaxSpeed { get; }
        public int MaxFlightDistance { get; }
        public int MaxLoadCapacity { get; }


        public Plane(string model, int maxSpeed, int maxFlightDistance, int maxLoadCapacity)
        {
            Model = model;
            MaxSpeed = maxSpeed;
            MaxFlightDistance = maxFlightDistance;
            MaxLoadCapacity = maxLoadCapacity;
        }

        public string GetModel()
        {
            return Model;
        }

        public int GetMS()
        {
            return MaxSpeed;
        }

        public int MAXFlightDistance()
        {
            return MaxFlightDistance;
        }

        public int MAXLoadCapacity()
        {
            return MaxLoadCapacity;
        }

        public override string ToString()
        {
            return $"Plane{{model='{Model}'," +
                   $" maxSpeed={MaxSpeed}," +
                   $" maxFlightDistance={MaxFlightDistance}," +
                   $" maxLoadCapacity={MaxLoadCapacity}}}";
        }

        public override bool Equals(object obj)
        {
            if (obj is Plane plane)
            {
                return Model == plane.Model &&
                       MaxSpeed == plane.MaxSpeed &&
                       MaxFlightDistance == plane.MaxFlightDistance &&
                       MaxLoadCapacity == plane.MaxLoadCapacity;
            }
            return false;
        }

      

    }
}
